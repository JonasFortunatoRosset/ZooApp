from flask import request
from database.db import db
from models.funcionarios import Funcionarios

def funcionariosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            funcionarios = Funcionarios(data['codigo'], data['nome'], data['email'], data['senha'], data['salario'], data['endereco'], data['cargaHoraria'])
            db.session.add(funcionarios)
            db.session.commit()
            return 'funcionarios inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar funcionarios. Erro: {}'.format(str(e))}, 400
    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_funcionario_id = data['codigo']
                delete_funcionario = Funcionarios.query.get(delete_funcionario_id)
                if delete_funcionario is None:
                    return {'error': 'Funcionario não encontrado'}, 404
                db.session.delete(delete_funcionario)
                db.session.commit()
                return 'Funcionario deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Funcionario. Erro{}'.format(e)}, 400 
