import React, { forwardRef } from "react";

const Item = forwardRef(({ id, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {id}
    </div>
  );
});

// Set display name for the Item component
Item.displayName = "Item";

export default Item;
