import React from 'react';

interface AlertProps extends React.PropsWithChildren{
  show: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<AlertProps> = ({show,type, onDismiss, children}) => {
  const alertClass = "alert-dismissible alert alert-" + type;

  return (
      <div className={alertClass} style={{display: show ? 'block' : 'none'}} role="alert">
        {children}
        {/*{alertCancel}*/}
        {onDismiss ? (<button onClick={onDismiss} type="button" className="btn-close"></button>) : null}
      </div>
  );
};
// style={{display: show ? 'block' : 'none'}}
export default Alert;