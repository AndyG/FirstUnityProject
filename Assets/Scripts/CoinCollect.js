function OnTriggerEnter(info: Collider) {
	CoinSystem.coinCount++;
	Destroy(gameObject);
}