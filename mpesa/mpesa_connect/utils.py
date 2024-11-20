import base64
import re
from typing import Union
from datetime import datetime


def base64encode(data: str) -> str:
    return base64.b64encode(data.encode("utf8")).decode("utf8")


def str_now() -> str:
    return datetime.now().strftime("%Y%m%d%H%M%S")


def snake_case(str: str) -> str:
    return re.sub(r"((?<=[a-z0-9])[A-Z]|(?!^)[A-Z](?=[a-z]))", r"_\1", str).lower()


def generate_password(
    *,
    business_short_code: Union[int, str],
    pass_key: str,
    timestamp: str,
) -> str:
    return base64encode(str(business_short_code) + pass_key + timestamp)
