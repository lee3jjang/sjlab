from sqlalchemy.orm import Session

from models import Workspace


def get_workspace(
    db: Session,
    workspace_id: int,
) -> Workspace | None:
    workspace: Workspace | None = db.get(Workspace, workspace_id)
    return workspace
