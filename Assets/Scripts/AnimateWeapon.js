﻿function Update() {
	if (Input.GetButtonDown("Attack")) {
		GetComponent.<Animation>().Play("AttackAnimation");
	}
}