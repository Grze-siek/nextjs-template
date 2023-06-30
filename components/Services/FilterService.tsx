import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { brown, grey } from '@mui/material/colors';
import { Dispatch, SetStateAction } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

type FilterServiceProps = {
  filterOption: number;
  setFilterOption: Dispatch<SetStateAction<number>>;
};

export default function FilterService({
  filterOption,
  setFilterOption,
}: FilterServiceProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOption(Number(event.target.value));
  };
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <FormControl className="w-full mx-auto text-center">
      <FormLabel
        sx={{
          color: grey[900],
          '&.Mui-focused': {
            color: brown[500],
          },
        }}
        id="demo-row-radio-buttons-group-label"
      >
        Wybierz to co cię interesuje:
      </FormLabel>
      <RadioGroup
        row={isDesktop}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="controlled-radio-buttons-group"
        className="mx-auto flex flex-col justify-center md:flex-row"
        defaultValue={1}
        value={filterOption}
        onChange={handleChange}
      >
        <FormControlLabel
          value={1}
          control={
            <Radio
              sx={{
                color: brown[500],
                '&.Mui-checked': {
                  color: brown[500],
                },
              }}
            />
          }
          label="Wszystkie"
        />
        <FormControlLabel
          value={2}
          control={
            <Radio
              sx={{
                color: brown[500],
                '&.Mui-checked': {
                  color: brown[500],
                },
              }}
            />
          }
          label="Pakiety"
        />
        <FormControlLabel
          value={3}
          control={
            <Radio
              sx={{
                color: brown[500],
                '&.Mui-checked': {
                  color: brown[500],
                },
              }}
            />
          }
          label="Przecenione"
        />
      </RadioGroup>
    </FormControl>
  );
}
