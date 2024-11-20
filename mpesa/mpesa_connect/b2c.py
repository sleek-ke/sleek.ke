from typing import Any, Union, Optional
from urllib.parse import urljoin

import requests

from .base import Service
from .enums import TransactionType
from .urls import PATH_B2C_PAYMENTREQUEST


class B2C(Service):
    def payment_request(
        self,
        *,
        initiator_name: str,
        security_credential: str,
        command_id: Union[TransactionType, str],
        amount: int,
        party_a: int,
        party_b: int,
        remarks: str,
        queue_time_out_url: str,
        result_url: str,
        occassion: Optional[str] = None,
        access_token: Optional[str] = None,
    ) -> Any:
        payload = {
            "InitiatorName": initiator_name,
            "SecurityCredential": security_credential,
            "CommandID": command_id.value
            if isinstance(command_id, TransactionType)
            else command_id,
            "Amount": amount,
            "PartyA": party_a,
            "PartyB": party_b,
            "Remarks": remarks,
            "QueueTimeOutURL": queue_time_out_url,
            "ResultURL": result_url,
            "Occassion": occassion or "",
        }
        response = requests.post(
            urljoin(self.app.base_url, PATH_B2C_PAYMENTREQUEST),
            json=payload,
            headers={"Authorization": f"Bearer {access_token or self.access_token}"},
        )
        return self._make_result(response)
