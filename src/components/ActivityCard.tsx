import { capitalizeFirstLetter } from "../lib/utils";
import { Badge } from "./Badge";
import { BoredActivity } from "../types/types";

type ActivityCardProps = {
  activity: BoredActivity;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div key={activity.key} className="border p-4 rounded-xl shadow-sm flex-col flex max-w-[350px]">
      <h4 className="font-semibold">{activity.activity}</h4>
      <p className="text-sm text-slate-600 my-2">
        Participants: {activity.participants}
      </p>
      <p className="text-sm text-slate-600 my-2">
        Accessibility: {activity.accessibility}
      </p>
      <p className="text-sm text-slate-600 my-2">Price: {activity.price}</p>
      <Badge className="w-fit my-2 first-letter:normal-case" variant="outline">
        {capitalizeFirstLetter(activity.type)}
      </Badge>
    </div>
  );
};

export default ActivityCard;
