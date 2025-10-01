import React from "react";

class UserClass extends React.Component {
    render(){
        const {name} = this.props;
        return(
            <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="mb-4">
                    <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        DS
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                    <p className="text-orange-600 font-medium mb-1">Frontend Developer</p>
                    <p className="text-gray-600 text-sm mb-4">MCA Student at VIT College</p>
                </div>
                
                <div className="text-left space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                        I'm passionate about building modern, responsive frontend websites using React. 
                        I enjoy creating user-friendly interfaces and solving complex problems through clean, 
                        efficient code.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Currently pursuing my MCA from VIT College, I'm eager to expand my skills into 
                        backend development to become a proficient full-stack developer.
                    </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center">
                            <span className="mr-1">📧</span>
                            <span>deepesh.sde@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-1">🎓</span>
                            <span>VIT College</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserClass;