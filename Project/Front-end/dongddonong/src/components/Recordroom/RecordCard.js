import user2 from "../../assets/player2.jpg";
import rightArrow from "../../assets/icon/right-arrow.png";
import leftArrow from "../../assets/icon/left-arrow.png";
import { useUserContext } from "../../contexts/userContext";

const RecordCard = (props) => {
  const players = [];
  const { user } = useUserContext();
  let player1 = null;
  let player2 = null;
  for (const key in props.game) {
    players.push(key);
  }
  if (players.length > 2) {
    player1 = players[0];
    player2 = players[1];
  } else {
    player1 = players[0];
  }

  return (
    <div className="flex flex-col mt-4 gap-3">
      <div className="h-32 border-black rounded border">
        <div className="h-4"></div>
        <div className="h-28 flex gap-1">
          <div className="flex flex-col items-center justify-evenly ml-2 w-1/5">
            <img
              src={user.profileImgUrl}
              className="rounded-2xl w-14 h-16"
              alt="어웨이"
            />
            <div className="text-[12px]">{player1}</div>
          </div>

          <div className="flex items-center justify-center w-3/5 relative">
            <div className="absolute top-0 text-sm">
              {props.game["gameDate"]}
            </div>

            <div className="h-1/2 flex items-center relative w-full">
              <div className="absolute left-0 text-xl">
                {props.game[player1]["total"]}
              </div>
              {player2 &&
                props.game[player2]["total"] < props.game[player1]["total"] && (
                  <div className="absolute left-10">
                    <img
                      className="w-3 -translate-y-px"
                      src={leftArrow}
                      alt=""
                    />
                  </div>
                )}
              {player2 &&
                props.game[player2]["total"] > props.game[player1]["total"] && (
                  <div className="absolute right-10">
                    <img
                      className="w-3 -translate-y-px"
                      src={rightArrow}
                      alt=""
                    />
                  </div>
                )}
              <div className="absolute right-0 text-xl">
                {player2 && props.game[player2]["total"]}
              </div>
            </div>
          </div>
          {player2 && (
            <div className="flex flex-col items-center justify-evenly mr-2 w-1/5">
              <img src={user2} className="rounded-2xl w-14 h-16" alt="어웨이" />
              <div className="text-[12px]">{player2}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
