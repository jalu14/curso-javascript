const nav = {
    tag: 'ul', children: [
        { tag: 'li', children: ['foo'] },
        { tag: 'li', children: ['bar'] },
        {
            tag: 'li', children: [
                'qux',
                {
                    tag: 'ol', children: [
                        { tag: 'li', children: ['foo'] },
                        { tag: 'li', children: ['bar'] },
                        { tag: 'li', children: ['qux'] },
                    ]
                }
            ]
        }
    ]
};

const componerNivel = function (obj) {
    let nivelActual = '';
    // Comprobar si es padre
    if (obj.children) {
        return `<${obj.tag}>${componerNivel(obj.children)}</${obj.tag}>`;
    }
    // Comprobar si es texto
    if (typeof obj === 'string') {
        return `${obj}`;
    }

    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            nivelActual += componerNivel(obj[i]);
        }
    }

    return nivelActual;
};

console.log(componerNivel(nav));