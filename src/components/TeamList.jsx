const TeamList = ({ teamMembers }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">👥</span>
        Team Members
      </h3>
      
      <div className="space-y-3">
        {teamMembers.map((member) => (
          <div 
            key={member.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {member.team}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;


