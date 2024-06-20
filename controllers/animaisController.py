from flask import request
from database.db import db
from models.animais import Animais

def animaisController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            animais = Animais(data['codigo'], data['nome'], data['especie'], data['dataNascimento'], data['status'])
            db.session.add(animais)
            db.session.commit()
            return 'animais inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar os animais. Erro: {}'.format(str(e))}, 400