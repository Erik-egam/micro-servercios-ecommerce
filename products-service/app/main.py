from dotenv import load_dotenv
import os
from fastapi import FastAPI, HTTPException
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Base, Product, ProductCreate
from fastapi.middleware.cors import CORSMiddleware



load_dotenv()

DB_USER = os.getenv("POSTGRES_USER", "postgres")
DB_PASS = os.getenv("POSTGRES_PASSWORD", "postgres")
DB_NAME = os.getenv("POSTGRES_DB", "productsdb")
DB_HOST = os.getenv("POSTGRES_HOST", "postgres")
DB_PORT = os.getenv("POSTGRES_PORT", "5432")

DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=False)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/products", status_code=201)
def create_product(p: ProductCreate):
    db = SessionLocal()
    prod = Product(name=p.name, price=p.price)
    db.add(prod)
    db.commit()
    db.refresh(prod)
    db.close()
    return prod


@app.get("/products")
def list_products():
    db = SessionLocal()
    items = db.query(Product).all()
    db.close()
    return items


@app.get("/products/{id}")
def get_product(id: int):
    db = SessionLocal()
    prod = db.query(Product).filter(Product.id == id).first()
    db.close()
    if not prod:
        raise HTTPException(status_code=404, detail="not found")
    return prod
