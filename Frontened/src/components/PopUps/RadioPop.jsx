export const RadioPop = ({
  title,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
  teamMode,
  setTeamMode,
  entryMode,
  setEntryMode,
  teamPerPlayer,
  setTeamPerPlayer,
  teams,
  number,
}) => {
  const value = number ? teamPerPlayer : teams ? teamMode : entryMode;
  const setValue = number
    ? setTeamPerPlayer
    : teams
      ? setTeamMode
      : setEntryMode;

  const options = [
    { value: "option1", label: optionOne },
    { value: "option2", label: optionTwo },
    { value: "option3", label: optionThree },
    { value: "option4", label: optionFour },
  ];

  return (
    <div>
      <h3>{title}</h3>
      {options.map(
        (opt) =>
          opt.label && (
            <label key={opt.value}>
              <input
                type="radio"
                name="option"
                value={opt.value}
                checked={value === opt.value}
                onChange={() => setValue(opt.value)}
              />{" "}
              {opt.label}
            </label>
          ),
      )}
    </div>
  );
};