from typing import Any, Union, Optional
from urllib.parse import urljoin

import requests

from .base import Service
from .enums import TransactionType, IdentifierType
from .urls import PATH_TRANSACTIONSTATUS_QUERY


class TransactionStatus(Service):
    def query(
        self,
        *,
        initiator: str,
        security_credential: str,
        transaction_id: str,
        identifier_type: Union[IdentifierType, int],
        party_a: int,
        remarks: str,
        queue_time_out_url: str,
        result_url: str,
        command_id: Union[
            TransactionType, str
        ] = TransactionType.TRANSACTION_STATUS_QUERY,
        occassion: Optional[str] = None,
        access_token: Optional[str] = None,
    ) -> Any:
        payload = {
            "Initiator": initiator,
            "SecurityCredential": security_credential,
            "CommandID": command_id.value
            if isinstance(command_id, TransactionType)
            else command_id,
            "TransactionID": transaction_id,
            "PartyA": party_a,
            "IdentifierType": identifier_type.value
            if isinstance(identifier_type, IdentifierType)
            else identifier_type,
            "Remarks": remarks,
            "QueueTimeOutURL": queue_time_out_url,
            "ResultURL": result_url,
            "Occassion": occassion,
        }
        response = requests.post(
            urljoin(self.app.base_url, PATH_TRANSACTIONSTATUS_QUERY),
            json=payload,
            headers={"Authorization": f"Bearer {access_token or self.access_token}"},
        )
        return self._make_result(response)
