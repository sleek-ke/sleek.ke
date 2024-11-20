from typing import Any, Union, Optional, Tuple
from urllib.parse import urljoin

import requests

from .base import Service
from .enums import TransactionType
from .urls import PATH_STKPUSH_PROCESSREQUEST, PATH_STKPUSHQUERY_QUERY
from .utils import str_now, generate_password


class STKPush(Service):
    def process_request(
        self,
        *,
        business_short_code: int,
        amount: int,
        phone_number: int,
        call_back_url: str,
        account_reference: str,
        transaction_desc: str,
        transaction_type: Union[
            TransactionType, str
        ] = TransactionType.CUSTOMER_PAY_BILL_ONLINE,
        party_a: Optional[str] = None,
        party_b: Optional[str] = None,
        password: Optional[str] = None,
        timestamp: Optional[str] = None,
        pass_key: Optional[str] = None,
        access_token: Optional[str] = None,
    ) -> Any:
        if not password:
            password, timestamp = self._generate_password(
                business_short_code,
                pass_key,
                timestamp,
            )
        payload = {
            "BusinessShortCode": business_short_code,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": transaction_type.value
            if isinstance(transaction_type, TransactionType)
            else transaction_type,
            "Amount": amount,
            "PartyA": party_a or phone_number,
            "PartyB": party_b or business_short_code,
            "PhoneNumber": phone_number,
            "CallBackURL": call_back_url,
            "AccountReference": account_reference,
            "TransactionDesc": transaction_desc,
        }
        response = requests.post(
            urljoin(self.app.base_url, PATH_STKPUSH_PROCESSREQUEST),
            json=payload,
            headers={
                "Authorization": f"Bearer {access_token or self.access_token}",
            },
        )
        return self._make_result(response)

    def query(
        self,
        *,
        business_short_code: int,
        checkout_request_id: str,
        password: Optional[str] = None,
        timestamp: Optional[str] = None,
        pass_key: Optional[str] = None,
        access_token: Optional[str] = None,
    ) -> Any:
        if not password:
            password, timestamp = self._generate_password(
                business_short_code,
                pass_key,
                timestamp,
            )
        payload = {
            "BusinessShortCode": business_short_code,
            "Password": password,
            "Timestamp": timestamp,
            "CheckoutRequestID": checkout_request_id,
        }
        response = requests.post(
            urljoin(self.app.base_url, PATH_STKPUSHQUERY_QUERY),
            json=payload,
            headers={
                "Authorization": f"Bearer {access_token or self.access_token}",
            },
        )
        return self._make_result(response)

    def _generate_password(
        self,
        business_short_code: int,
        pass_key: Optional[str],
        timestamp: Optional[str],
    ) -> Tuple[str, str]:
        if not timestamp:
            timestamp = str_now()
        return (
            generate_password(
                business_short_code=business_short_code,
                pass_key=pass_key or "",
                timestamp=timestamp,
            ),
            timestamp,
        )
