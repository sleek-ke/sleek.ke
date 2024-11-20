from typing import Any, Union, Optional
from urllib.parse import urljoin

import requests

from .base import Service
from .enums import TransactionType, ResponseType
from .app import AppDomain
from .urls import PATH_C2B_REGISTERURL, PATH_C2B_SIMULATE


class C2B(Service):
    def register_url(
        self,
        *,
        short_code: int,
        validation_url: str,
        confirmation_url: str,
        response_type: Union[ResponseType, str],
        access_token: Optional[str] = None,
    ) -> Any:
        payload = {
            "ShortCode": short_code,
            "ValidationURL": validation_url,
            "ConfirmationURL": confirmation_url,
            "ResponseType": response_type.value
            if isinstance(response_type, ResponseType)
            else response_type,
        }
        response = requests.post(
            urljoin(self.app.base_url, PATH_C2B_REGISTERURL),
            json=payload,
            headers={"Authorization": f"Bearer {access_token or self.access_token}"},
        )
        return self._make_result(response)

    def simulate(
        self,
        *,
        short_code: int,
        command_id: Union[TransactionType, str],
        amount: int,
        msisdn: int,
        bill_ref_number: Optional[str] = None,
        access_token: Optional[str] = None,
    ) -> Any:
        if self.app.domain != AppDomain.SANDBOX:
            raise Exception("Simulate is available on sandbox only")
        if isinstance(command_id, TransactionType):
            command_id = command_id.value
        payload = {
            "ShortCode": short_code,
            "CommandID": command_id,
            "Amount": amount,
            "Msisdn": msisdn,
        }
        if command_id == TransactionType.CUSTOMER_PAY_BILL_ONLINE.value:
            payload["BillRefNumber"] = bill_ref_number
        response = requests.post(
            urljoin(self.app.base_url, PATH_C2B_SIMULATE),
            json=payload,
            headers={"Authorization": f"Bearer {access_token or self.access_token}"},
        )
        return self._make_result(response)
