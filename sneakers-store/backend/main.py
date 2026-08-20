from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import products

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Sneakers Store API is running"}

@app.get("/products")
def get_products(category: str = None, search: str = None):
    result = products
    if category:
        result = [p for p in result if p["category"].lower() == category.lower()]
    if search:
        result = [p for p in result if search.lower() in p["name"].lower()]
    return result

@app.get("/products/{product_id}")
def get_product(product_id: int):
    for p in products:
        if p["id"] == product_id:
            return p
    return {"error": "Not found"}
