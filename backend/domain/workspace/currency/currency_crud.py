from sqlalchemy.orm import Session

from domain.workspace.currency.currency_schema import CurrencyUpdate
from models import Currency, Workspace


def get_currency(
    db: Session,
    workspace_id: int,
    currency_id: int,
) -> Currency | None:
    currency = (
        db.query(Currency)
        .filter(
            id == currency_id,
            Workspace.id == workspace_id,
        )
        .first()
    )
    return currency


def get_currency_list(
    db: Session,
    workspace_id: int,
    skip: int = 0,
    limit: int = 10,
) -> list[Currency]:
    currency_list = (
        db.query(Currency)
        .filter(Workspace.id == workspace_id)
        .order_by(Currency.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )
    return currency_list


def create_currency(
    db: Session,
    workspace: Workspace,
    currency_update: CurrencyUpdate,
) -> None:
    currency = Currency(
        workspace=workspace,
        description=currency_update.description,
        ticker=currency_update.ticker,
    )
    db.add(currency)
    db.commit()


def edit_currency(
    db: Session,
    currency: Currency,
    currency_update: CurrencyUpdate,
) -> None:
    currency.description = currency_update.description
    currency.ticker = currency_update.ticker
    db.add(currency)
    db.commit()


def delete_currency(
    db: Session,
    currency: Currency,
) -> None:
    db.delete(currency)
    db.commit()
