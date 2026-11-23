# Pendulum: Closed-Loop Probing Signals

Because the inverted pendulum is open-loop unstable (\(+13.36\text{ rad/s}\) pole), excitation data must be collected in closed loop using \(u_k = K_{\text{st}}\xi_k + e_k\) with \(K_{\text{st}} = \hat{K}_\gamma\). After manual upright engagement prior to \(t = 10\text{ s}\), the probing signal \(e_k\) is injected for \(20\text{ s}\) of a \(30\text{ s}\) run (\(T \approx 2000\) transitions at \(T_s = 10\text{ ms}\)).

### Excitation Trade-off & Diagnostics (Table C.7)
* **P1 (Multisine \(0.8\text{ V}\)):** Odd harmonics (\(0.1\text{--}6\text{ Hz}\), crest factor \(\approx 2.06\)) keep pendulum excursions inside the linear regime (\(\max|\delta\phi| = 7.38^\circ\)), contributing \(\approx 52\%\) of input RMS with a \(10.3\%\) LS residual and \(\hat{\eta} = 0.11\).
* **P2 (PRBS \(0.5\text{ V}\)):** Flat-spectrum binary sequence (\(5\text{ Hz}\) clock, crest factor \(= 1\)) achieves a higher probing share (\(\approx 65\%\) of input RMS) and roughly halves both the LS residual (\(7.7\%\)) and noise proxy (\(\hat{\eta} = 0.053\)) while staying well within safety and linear bounds.

---

## 1. P1 — Multisine \(0.8\text{ V}\)
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_probe_p1" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/probing/ProbingSignalms0.8.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_probe_p1" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/probing/ProbingSignalms0.8V_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_probe_p1', 'vid2_probe_p1')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_probe_p1', 'vid2_probe_p1')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. P2 — PRBS \(0.5\text{ V}\)
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_probe_p2" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/probing/ProbingSignalPRBS0.5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_probe_p2" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/probing/ProbingSignalPRBS0.5V_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_probe_p2', 'vid2_probe_p2')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_probe_p2', 'vid2_probe_p2')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<!-- Unified JavaScript function for all synchronized videos on this page -->
<script>
  function syncPlayPause(id1, id2) {
    var v1 = document.getElementById(id1);
    var v2 = document.getElementById(id2);
    if (v1.paused) { v1.play(); v2.play(); }
    else { v1.pause(); v2.pause(); }
  }
  function syncRestart(id1, id2) {
    var v1 = document.getElementById(id1);
    var v2 = document.getElementById(id2);
    v1.currentTime = 0; v2.currentTime = 0;
    v1.play(); v2.play();
  }
</script>