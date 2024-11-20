from enum import Enum


class TransactionType(Enum):
    CUSTOMER_PAY_BILL_ONLINE = "CustomerPayBillOnline"
    CUSTOMER_BUY_GOODS_ONLINE = "CustomerBuyGoodsOnline"
    BUSINESS_PAYMENT = "BusinessPayment"
    SALARY_PAYMENT = "SalaryPayment"
    PROMOTION_PAYMENT = "PromotionPayment"
    ACCOUNT_BALANCE = "AccountBalance"
    TRANSACTION_STATUS_QUERY = "TransactionStatusQuery"


class ResponseType(Enum):
    COMPLETED = "Completed"
    CANCELED = "Canceled"


class IdentifierType(Enum):
    MSISDN = 1
    TILL_NUMBER = 2
    ORGANIZATION_SHORT_CODE = 4
