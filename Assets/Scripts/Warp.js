var warptarget: Transform;

function Update() {

}

function OnTriggerEnter(col: Collider) {
	if (col.gameObject.tag == "warp1") {
		Debug.Log("warp script called");
		this.transform.position = warptarget.position;
	} else if(col.gameObject.tag == "warp2") {
	
	}
}