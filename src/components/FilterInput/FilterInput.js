import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const FilterInput = ({trucks, onChange, value}) => {
  return (
    <Autocomplete
      id="filter-input"
      options={trucks}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Filter trucks" variant="outlined" />
      )}
      onChange={onChange}
      
    />
  )
}
