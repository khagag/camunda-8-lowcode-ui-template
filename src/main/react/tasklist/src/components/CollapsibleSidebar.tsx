import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function CollapsibleSidebar(props:any) {
  // let isCollapsedByDefault = false;
  const [isCollapsed, setIsCollapsed] = useState(props.isCollapsedByDefault);

  return (
    <div className="col-auto px-0">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-expanded={!isCollapsed}
        aria-controls="sidebar-nav"
        className="d-flex align-items-center justify-content-between border-end border-bottom-0 px-3 py-2"
      >
        Sidebar {isCollapsed ? '>' : 'v'}
      </button>
      <Collapse in={!isCollapsed}>
        <div id="sidebar" className="border-end border-top-0">
          <div id="sidebar-nav" className="list-group bg-secondary border-0 rounded-0 text-sm-start">
          {props.children}
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default CollapsibleSidebar;