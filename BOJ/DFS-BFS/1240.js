function dfs(v) {
  if (visited[v]) {
    return;
  }

  visited[v] = true;

  for (let i = 0; i < edge[v].length; i++) {
    const next = edge[v][i];
    if (next && !visited[next]) {
      dfs(next);
    }
  }
}
