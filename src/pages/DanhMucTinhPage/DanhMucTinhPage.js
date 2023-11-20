import React, { useEffect, useMemo, useState } from 'react';
import TablePagePagination from "../../shared/components/TablePagePagination/TablePagePagination";
import Table from '../../shared/components/Table/Table';
import './DanhMucTinhPage.scss';
import { TablePagePaginationPropTypes } from '../../shared/components/TablePagePagination/tablePagePaginationHelpers';
import PropTypes from 'prop-types';

// let i = 0;
const columns = [
  {
    id: '1',
    title: 'STT',
    render: content => content.age
  },
  {
    id: '2',
    title: 'Mã',
    render: content => content.name
  },
  {
    id: '3',
    title: 'Tên',
    render: content => <a href={content.url}>{content.url}</a>
  }
];

const DanhMucTinhPage = ({ pagePagination, pokemons, isLoadingPokemons }) => {
  const [inputValue, setInputValue] = useState('');
  const [textSearch, setTextSearch] = useState('');

  const rows = useMemo(() => pokemons.map(pokemon => ({
    id: pokemon.name,
    name: pokemon.name,
    url: pokemon.url
  })), [pokemons]);

  const rowsFiltered = useMemo(() =>
    rows.filter(row => row.name.toLowerCase().includes(textSearch.toLowerCase())), [rows, textSearch]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setTextSearch(inputValue)
    }, 250);
    return () => {
      clearTimeout(delay);
    }
  }, [inputValue]);

  return (
    <div className='container'>
      <div className='item-filter'>
        <label className=''>
          Tỉnh/Thành phố
        </label>

        <input
          placeholder="Filter on current page"
          value={inputValue}
          onChange={evt => setInputValue(evt.target.value)}
        />
      </div>

      <Table
        rows={rowsFiltered}
        columns={columns}
        isLoading={isLoadingPokemons}
      />

      <TablePagePagination
        {...pagePagination}
      />
    </div>
  );
};

DanhMucTinhPage.propTypes = {
  pagePagination: PropTypes.shape(TablePagePaginationPropTypes),
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  isLoadingPokemons: PropTypes.bool.isRequired
}

export default DanhMucTinhPage;
