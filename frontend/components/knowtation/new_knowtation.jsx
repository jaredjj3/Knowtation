import React from 'react';
import NewKnowtationForm from './new_knowtation_form';
import KnowtationEditor from './knowtation_editor';

class Knowtation extends React.Component {


  render() {

    return(
      <div className='new-knowtation-container'>
        <NewKnowtationForm />
        <KnowtationEditor />
      </div>
    );
  }
}

export default Knowtation;
