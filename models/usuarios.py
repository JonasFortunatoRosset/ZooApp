from database.db import db

class Usuarios(db.Model):
    def to_dict(self):

        return{
            'codigo'   :self.codigo,
            'nome' :self.nome,
            'email':self.email,
            'senha':self.senha
        }
    
    codigo = db.Column(db.Integer, primary_key=True, nullable=True, unique=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100))
    senha = db.Column(db.String(100))

    def __init__(self, nome,email,senha,codigo):
        self.codigo= codigo
        self.nome  = nome
        self.email = email
        self.senha = senha