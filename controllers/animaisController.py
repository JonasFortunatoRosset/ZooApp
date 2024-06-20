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

    elif request.method == 'GET':
        try:
            data = Animais.query.all()
            animal = {'animais': [animais.to_dict() for animais in data]}
            return animal

        except Exception as e:
            return 'Não foi possível buscar usuários. Error: {}'.format(str(e)), 405

    elif request.method == 'PUT':
        try:
            data = request.get_json()
            put_animais_id = data['codigo']
            put_animais = Animais.query.get(put_animais_id)
            if put_animais is None:
                return {'error': 'Animal não encontrado'}, 404
            put_animais.nome = data.get('nome', put_animais.nome)
            put_animais.especie = data.get('especie', put_animais.especie)
            put_animais.dataNascimento = data.get('dataNascimento', put_animais.dataNascimento)
            put_animais.dataChegadaZoo = data.get('dataChegadaZoo', put_animais.dataChegadaZoo)
            put_animais.status = data.get('status', put_animais.status)
            print(put_animais.nome,put_animais.especie,put_animais.dataNascimento,put_animais.dataChegadaZoo,put_animais.status)
            db.session.commit()
            return 'Animal alterado com sucesso', 200
        except Exception as e:
            return {'error': 'Erro ao atualizar Animal. Erro{}'.format(e)}, 400

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
