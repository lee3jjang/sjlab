from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from domain.workspace.currency import currency_schema, currency_crud
from domain.workspace import workspace_crud
from starlette.status import HTTP_204_NO_CONTENT

from database import get_db

router = APIRouter(prefix="/api/workspace/{workspace_id}/currency")


@router.post("/create", status_code=HTTP_204_NO_CONTENT)
def create_currency(
    workspace_id: int,
    currency_update: currency_schema.CurrencyUpdate,
    db: Session = Depends(get_db),
) -> None:
    workspace = workspace_crud.get_workspace(db, workspace_id)
    if not workspace:
        raise HTTPException(status_code=404, detail="Workspace not found")
    currency_crud.create_currency(
        db,
        workspace,
        currency_update,
    )


@router.put("/{currency_id}/edit", status_code=HTTP_204_NO_CONTENT)
def edit_currency(
    workspace_id: int,
    currency_id: int,
    currency_update: currency_schema.CurrencyUpdate,
    db: Session = Depends(get_db),
):
    currency = currency_crud.get_currency(
        db,
        workspace_id,
        currency_id,
    )
    if not currency:
        raise HTTPException(status_code=404, detail="Currency not found")
    currency_crud.edit_currency(
        db,
        currency,
        currency_update,
    )


@router.delete("/{currency_id}/delete", status_code=HTTP_204_NO_CONTENT)
def delete_curreny(
    workspace_id: int,
    currency_id: int,
    db: Session = Depends(get_db),
) -> None:
    currency = currency_crud.get_currency(
        db,
        workspace_id,
        currency_id,
    )
    if not currency:
        raise HTTPException(status_code=404, detail="Currency not found")
    currency_crud.delete_currency(
        db,
        currency,
    )


@router.get("/list", response_model=list[currency_schema.Currency])
def get_currency_list(
    workspace_id: int,
    db: Session = Depends(get_db),
    page: int = 0,
    size: int = 10,
):
    currency_list = currency_crud.get_currency_list(
        db,
        workspace_id,
        page * size,
        size,
    )
    return currency_list
