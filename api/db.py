from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker,Session


# Database URL for MySQL (replace with your actual credentials)
SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://root:root@localhost/college"

# Create SQLAlchemy engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)

# Session local setup
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create a session instance
db: Session = SessionLocal()

# Create Base class for ORM models
Base = declarative_base()

# Define a simple User model (Table)
from sqlalchemy import Column, Integer, String

class User(Base):
    __tablename__ = 'users'

    userid = Column(Integer, primary_key=True, unique=True)
    username = Column(String(255), nullable=False)  # Specify length for VARCHAR
    password = Column(String(255), nullable=False)  # Specify length for VARCHAR
    address = Column(String(255), nullable=True)  # Specify length for VARCHAR
    role = Column(String(50), nullable=False)  # Specify length for VARCHAR



