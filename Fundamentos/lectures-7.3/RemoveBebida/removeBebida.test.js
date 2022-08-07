const removeBebida = require('./removeBebida');

describe('Remover sabor de bebida', () => {
    it('Remover agua', () => {
        const bebidas = ['agua', 'fanta', 'guarana', 'sprite', 'garapa', 'suco'];
        expect(['fanta', 'guarana', 'sprite', 'garapa', 'suco']).toEqual(removeBebida(bebidas, 'agua'));
    });
    
    it('Remove Fanta', () => {
        const bebidas = ['agua', 'fanta', 'guarana', 'sprite', 'garapa', 'suco'];
        expect(['agua', 'guarana', 'sprite', 'garapa', 'suco']).toEqual(removeBebida(bebidas, 'fanta'))
    });
    
    it('Remove Garapa se houver,', () => {
        const bebidas = ['agua', 'fanta', 'guarana', 'sprite', 'garapa', 'suco'];
        expect(removeBebida(bebidas,'garapa')).not.toContain('garapa');
    });

});