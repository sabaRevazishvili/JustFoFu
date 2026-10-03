import { useState } from "react";
import { NamingPop } from "./PopUps/NamingPop";
import { RadioPop } from "./PopUps/RadioPop";

export const Modal = () => {
  const [step, setStep] = useState(1);
  const [teamMode, setTeamMode] = useState("");
  const [entryMode, setEntryMode] = useState("");
  const [teamPerPlayer, setTeamPerPlayer] = useState("");

  const teamOption = teamMode === "option1" ? "teams" : "clubs";

  const nextStepHandler = () => setStep((s) => s + 1);
  const backStepHandler = () => setStep((s) => s - 1);
  console.log("teamMode", teamMode);
  console.log("entryMode", entryMode);
  return (
    <div className="h-screen">
      {step === 1 && <NamingPop name />}
      {step === 2 && (
        <RadioPop
          title={"Add manually or allow randomize?"}
          optionOne={"Manually"}
          optionTwo={"Random"}
          entryMode={entryMode}
          setEntryMode={setEntryMode}
        />
      )}

      {step === 3 && entryMode === "option1" && <NamingPop />}

      {step === 3 && entryMode === "option2" && (
        <RadioPop
          teams
          title={"Teams or Clubs?"}
          optionOne={"Teams"}
          optionTwo={"Clubs"}
          teamMode={teamMode}
          setTeamMode={setTeamMode}
        />
      )}
      {step == 4 && entryMode === "option2" && (
        <RadioPop
          number
          title={`How many ${teamOption} each player?`}
          optionOne={`One ${teamOption} per player`}
          optionTwo={`Two ${teamOption} per player`}
          optionThree={`Three ${teamOption} per player`}
          optionFour={`Four ${teamOption} per player`}
          teamPerPlayer={teamPerPlayer}
          setTeamPerPlayer={setTeamPerPlayer}
        />
      )}
      {step > 1 && <button onClick={backStepHandler}>Back</button>}
      {step < 4 && <button onClick={nextStepHandler}>Next</button>}
    </div>
  );
};
