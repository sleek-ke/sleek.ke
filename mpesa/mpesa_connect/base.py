from typing import Any, Optional, Tuple, List, Dict
from dataclasses import make_dataclass

from requests import Response

from .app import App
from .utils import snake_case


class Service:
    def __init__(
        self,
        app: App,
        /,
        *,
        access_token: Optional[str] = None,
    ) -> None:
        self.app = app
        self.access_token = access_token

    def _make_result(self, response: Response) -> Any:
        fields: List[Tuple[str, Any]] = [("response", Response)]
        kwargs: Dict[str, Any] = {"response": response}
        try:
            for k, v in response.json().items():
                k = snake_case(k)
                fields.append((k, type(v)))
                kwargs[k] = v
        except Exception as e:
            fields.append(("error", Exception))
            kwargs["error"] = e
        return make_dataclass(f"{self.__class__.__name__}Result", fields)(**kwargs)

        # TResult = TypeVar("TResult", bound="Result")

        @dataclass
        class Result:
            response: Response

            @classmethod
            def from_response(
                cls: Type[TResult],
                response: Response,
                *,
                property_mapper: Optional[Callable[[str], str]] = None,
            ) -> TResult:
                try:
                    data = response.json()
                except JSONDecodeError:
                    return cls(response)
                kwargs = {}
                for field in fields(cls)[1:]:
                    mapped_name = (
                        field.metadata.get("mapped_name")
                        or (callable(property_mapper) and property_mapper(field.name))
                        or field.name
                    )
                    kwargs[field.name] = data.get(mapped_name)
        return cls(response, **kwargs)
