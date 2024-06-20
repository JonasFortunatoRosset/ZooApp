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
    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_animais_id = data['codigo']
                delete_animais = Animais.query.get(delete_animais_id)
                if delete_animais is None:
                    return {'error': 'Animais não encontrado'}, 404
                db.session.delete(delete_animais)
                db.session.commit()
                return 'Animais deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Animais. Erro{}'.format(e)}, 400 
