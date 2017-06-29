import UnityEngine.SceneManagement;

function OnGUI() {
	if (GUI.Button (Rect (Screen.width/2-50, Screen.height/2, 100, 30), "Git Gud")) {
		SceneManager.LoadScene("WallsOnGround");
	}

	if (GUI.Button (Rect (Screen.width/2-50, Screen.height/2 + 40, 100, 30), "Git Out")) {
		Application.Quit();
	}
}