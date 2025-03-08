import uvicorn
from src.api import app
from db import engine, Base
from sqlalchemy.exc import OperationalError  # Ensure this import is here

@app.on_event("startup")
def startup_event():
    try:
        # This will create all tables defined in the Base metadata
        Base.metadata.create_all(bind=engine)
        print("Tables Created")

        # Attempt a connection to the database to ensure it works
        with engine.connect() as connection:
            print("MySQL Connected")
    
    except OperationalError as e:
        print("MySQL Connection Failed:", e)

if __name__ == "__main__":
    uvicorn.run("src.api:app", host="0.0.0.0", port=8000, reload=True)
