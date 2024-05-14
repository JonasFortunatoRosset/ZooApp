from database.db import db

class Ingressos(db.Model):
    def to_dict(self):

        return{
            'codigo':self.codigo,
            'tipo'  :self.tipo,
            'status':self.status,
            'codusuario':self.codusuario
        }
    
    codigo = db.Column(db.Integer, primary_key=True, nullable=True, unique=True)
    tipo = db.Column(db.String(20))
    status = db.Column(db.String(20))
    codusuario = db.Column(db.Integer(5))

    def __init__(self, codigo,tipo,status,codusuario):
        self.codigo= codigo
        self.tipo  = tipo
        self.status = status
        self.codusuario = codusuario