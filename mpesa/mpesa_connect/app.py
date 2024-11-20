from typing import Any, Union
from enum import Enum

from .urls import DOMAIN_PRODUCTION, DOMAIN_SANDBOX


class AppDomain(Enum):
    SANDBOX = DOMAIN_SANDBOX
    PRODUCTION = DOMAIN_PRODUCTION


class App:
    def __init__(
        self,
        *,
        domain: Union[AppDomain, str],
        consumer_key: str,
        consumer_secret: str,
    ) -> None:
        self.domain = AppDomain[domain.upper()] if isinstance(domain, str) else domain
        self.consumer_key = consumer_key
        self.consumer_secret = consumer_secret

    @property
    def base_url(self) -> str:
        return self.domain.value

    @classmethod
    def create_sandbox(cls, **kwargs: Any) -> "App":
        return cls(domain=AppDomain.SANDBOX, **kwargs)

    @classmethod
    def create_production(cls, **kwargs: Any) -> "App":
        return cls(domain=AppDomain.PRODUCTION, **kwargs)
