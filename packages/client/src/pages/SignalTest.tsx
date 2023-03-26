import React from "react";
import {Project, useProject, useProjectDescription, useProjectName} from "./SignalViewState";
import {useEffectHook} from "../util/signal";
import {Signal} from "@preact/signals-react";

interface SignalTestProps {
  project: Project;
}

const SignalTest: React.FC<SignalTestProps> = ({project}: SignalTestProps) => {
  /**
   * 모든 초기 값 셋팅은 props를 통해서 진행함
   * 데이터가 다 로딩이 되었다는 것을 가정하고 진행
   */
  const [project$$, setProject] = useProject(project);
  const [projectName$$, setProjectName] = useProjectName(project.name);
  const [projectDescription$$, setProjectDescription] = useProjectDescription(project.description);

  /**
   * 프로젝트 정보가 변경될때에 반응하여 특정 함수들을 동작시키는 커스텀 훅
   */
  const projectEffect = useEffectHook<Project>([setProjectName, setProjectDescription]);
  const projectNameApiEffect = useEffectHook<string>([(name: string) => {
    console.log('api call effect', name);
  }]);

  projectEffect(project$$);
  projectNameApiEffect(projectName$$);


  return (
    <div>
      <button onClick={() => {
        setProject({id: '2', name: 'project1', description: 'project1 description'});
      }}>update Project</button>
      <div>
        <span>project name:</span>
        <>{projectName$$}</>
      </div>
      <div>
        <span>project description:</span>
        <>{projectDescription$$}</>
      </div>
    </div>
  )
}



export default SignalTest;
