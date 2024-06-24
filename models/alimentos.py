from database.db import db

class Alimentos(db.Model):
    def to_dict(self):

        return{
            'codigo'       :self.codigo,
            'nome'         :self.nome,
            'pesoLote'     :self.pesoLote,
            'dataValidade' :self.dataValidade,
            'codFornecedor':self.codFornecedor
        }
    
    codigo = db.Column(db.Integer, primary_key=True, nullable=True, unique=True)
    nome = db.Column(db.String(100))
    pesoLote = db.Column(db.Float)
    dataValidade = db.Column(db.String(10))
    codFornecedor = db.Column(db.Integer)

    def __init__(self, codigo,nome,pesoLote,dataValidade,codFornecedor):
        self.codigo= codigo
        self.nome  = nome
        self.pesoLote  = pesoLote
        self.dataValidade = dataValidade
        self.codFornecedor = codFornecedor