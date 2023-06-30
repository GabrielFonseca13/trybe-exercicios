# 🚀 Exercício 1:
# Filas: crie uma classe Queue, onde deve conter as operações: enqueue,
# dequeue, peek e is_empty.

# Para este desafio, é necessário efetuar o import das classes LinkedList
# e Node e utilizar seus métodos de acesso para simular uma fila,
# respeitando o padrão FIFO.

import LinkedList
import Node


class Queue:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        return self.__data.insert_last(value)

    def dequeu(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)
