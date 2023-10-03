import React, { useEffect, useState } from 'react';

function withTransition(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
      return () => setVisible(false);
    }, []);

    const baseClassName = 'page';
    const activeClassName = isVisible ? `${baseClassName}-enter-active` : `${baseClassName}-leave-active`;

    return (
      <div className={activeClassName}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withTransition;
