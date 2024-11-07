import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {

  
   
     if(!activities.includes(activity))return false;

     const roleLevel = roles.indexOf(role.role);
     const requiredLevel = activities.indexOf(activity);

     return roleLevel >= requiredLevel;
};

export default useIsVerified;
