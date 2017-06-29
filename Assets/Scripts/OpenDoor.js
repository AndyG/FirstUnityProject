function OnMouseDown() {

		this.transform.parent.gameObject.transform.Rotate(0, 90, 0, Space.World);
	}


function OnMouseUp() {
		this.transform.parent.gameObject.transform.Rotate(0, 270, 0, Space.World);
	}