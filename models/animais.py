from database.db import db

class Animais(db.Model):
    def to_dict(self):

        return{
            'codigo'        :self.codigo,
            'nome'          :self.nome,
            'especie'       :self.especie,
            'dataNascimento':self.dataNascimento,
            'dataChegadaZoo':self.dataChegadaZoo,
            'status'        :self.status
        }
    
    codigo = db.Column(db.Integer, primary_key=True, nullable=True, unique=True)
    nome = db.Column(db.String(100))
    especie = db.Column(db.String(100))
    dataNascimento = db.Column(db.String(10))
    dataChegadaZoo = db.Column(db.String(10))
    status = db.Column(db.String(100))

    def __init__(self, codigo,nome,especie,dataNascimento,dataChegadaZoo,status):
        self.codigo= codigo
        self.nome  = nome
        self.especie  = especie
        self.dataNascimento = dataNascimento
        self.dataChegadaZoo = dataChegadaZoo
        self.status = status