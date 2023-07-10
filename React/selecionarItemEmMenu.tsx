import React, { useState } from 'react';

// propriedades do item
interface Item {
  id: number;
  name: string;
}

// listas de nome a ser colocados na sidebar
const itemList: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
];

// componente do 
// irá receber o item clicado, idicação booleana se foi clicada, função que seta o ultimo item clicado (callback)
const ListItem: React.FC<{ item: Item, selected: boolean, onClick: () => void }> = ({ item, selected, onClick }) => {
  
  // selectedClass é uma classe vinda do styledcompenents
  const className = selected ? 'selectedClass' : '';

  return (
    // onClick ativa a função recebido como argumento
    <li className={className} onClick={onClick}>
      {item.name}
    </li>
  );
};

// lista de item
const ItemList: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId);
  };

  // o mapp roda em cima da lista de itens
  return (
    <ul>
      {itemList.map((item) => (
        <ListItem
          key={item.id}
          // As 3 props de LIstItem
          item={item} 
          selected={selectedItemId === item.id}
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </ul>
  );
};

export default ItemList;
