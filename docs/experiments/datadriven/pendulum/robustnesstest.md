# Pendulum: Programmed-Pulse Robustness Tests

To evaluate disturbance rejection and steady-state servo behaviour under repeatable conditions, the data-driven controllers are tested over \(40\text{ s}\) runs with six pre-programmed \(1.80\text{ V}\) voltage pulses at \(t \in \{13, 17, 21, 25, 29, 33\}\text{ s}\) (signs \(+, -, +, -, -, +\), \(0\%\) saturation across all runs).

The five recordings below capture the representative behaviours highlighted in **Section 5.2.4** (Table C.9, benchmark \(\hat{K}_\gamma\) cost \(J = 24.1\)):
* **Best overall data-driven performance:** **P2 Indirect (IV)** cuts empirical disturbance cost by \(16\%\) relative to the analytical model baseline (\(J = 20.4\), \(0.84 \times \hat{K}_\gamma\)) while matching the imposed decay rate \(\alpha = 0.98\) (\(\hat{\rho} = 0.981\)).
* **Closed-loop LS bias:** **P1 Indirect (LS)** suffers errors-in-variables bias, yielding the worst P1 cost (\(J = 40.2\), \(1.67 \times \hat{K}_\gamma\)), largest peak pendulum error (\(8.08^\circ\)), and a \(2.65^\circ\) quiet limit cycle.
* **Direct noise-free vs. analytical baseline:** **P1 Direct, noise-free** achieves the smallest servo swing across all designs (\(\max|\psi| = 19.8^\circ\)) and outperforms \(\hat{K}_\gamma\) in cost (\(J = 21.5\), \(0.89 \times \hat{K}_\gamma\)).
* **Original vs. relaxed noisy LMIs & the \(K_\psi \gtrsim 0.9\text{ V/rad}\) threshold:** On **P2**, **Direct, noisy (original)** (\(K_\psi = 0.677\text{ V/rad}\)) drifts into the \(130^\circ\) safety cut-off at \(t = 9.7\text{ s}\) before the first pulse, whereas **Direct, noisy (relaxed)** (\(K_\psi = 0.708\text{ V/rad}\)) survives all pulses at the cost of large servo swings (\(\max|\psi| = 61.1^\circ\), \(J = 75.7\)).

---

## 1. P2 (PRBS \(0.5\text{ V}\)) — Indirect (IV)
*Lowest disturbance cost overall (\(J = 20.4\), \(0.84 \times \hat{K}_\gamma\)), \(\max|\delta\phi| = 5.82^\circ\), \(\max|\psi| = 23.1^\circ\), \(\hat{\rho} = 0.981\).*
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_rob_p2_iv" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/indirectIV_PRBS_0.5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_rob_p2_iv" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/IndirectIVPRBS0.5V_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_rob_p2_iv', 'vid2_rob_p2_iv')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_rob_p2_iv', 'vid2_rob_p2_iv')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. P2 (PRBS \(0.5\text{ V}\)) — Direct, noisy (original, Theorem 3.19)
*Failure mode: weak servo gain (\(K_\psi = 0.677 < 0.9\text{ V/rad}\)) causes servo drift into the \(130^\circ\) safety cut-off prior to the first pulse.*
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_rob_p2_noisy_orig" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/noisyorig_PRBS_0.5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_rob_p2_noisy_orig" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/NoisyorigPRBS0.5V_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_rob_p2_noisy_orig', 'vid2_rob_p2_noisy_orig')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_rob_p2_noisy_orig', 'vid2_rob_p2_noisy_orig')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 3. P2 (PRBS \(0.5\text{ V}\)) — Direct, noisy (relaxed, Theorem 3.20)
*Survives engagement and all pulses, but \(K_\psi = 0.708 < 0.9\text{ V/rad}\) yields large servo swings (\(\max|\psi| = 61.1^\circ\), \(J = 75.7\), \(3.13 \times \hat{K}_\gamma\)).*
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_rob_p2_noisy_rel" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/noisyrel_PRBS_0.5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_rob_p2_noisy_rel" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/NoisyrelPRBS0.5V_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_rob_p2_noisy_rel', 'vid2_rob_p2_noisy_rel')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_rob_p2_noisy_rel', 'vid2_rob_p2_noisy_rel')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 4. P1 (Multisine \(0.8\text{ V}\)) — Indirect (LS)
*Closed-loop errors-in-variables bias weakens \(K_{\delta\phi}\), producing a \(2.65^\circ\) quiet limit cycle, \(\max|\delta\phi| = 8.08^\circ\), \(\hat{\rho} = 0.999\), and \(J = 40.2\) (\(1.67 \times \hat{K}_\gamma\)).*
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_rob_p1_ls" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/indirectLS_ms_0.8.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_rob_p1_ls" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/IndirectLSms0.8V_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_rob_p1_ls', 'vid2_rob_p1_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_rob_p1_ls', 'vid2_rob_p1_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 5. P1 (Multisine \(0.8\text{ V}\)) — Direct, noise-free
*Smallest servo excursion overall (\(\max|\psi| = 19.8^\circ\)), outperforming \(\hat{K}_\gamma\) in disturbance cost (\(J = 21.5\), \(0.89 \times \hat{K}_\gamma\)) with \(\max|\delta\phi| = 5.71^\circ\).*
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_rob_p1_nf" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/noisefree_ms_0.8.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_rob_p1_nf" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/pendulum/robustness/Noisefreems0.8V_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_rob_p1_nf', 'vid2_rob_p1_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_rob_p1_nf', 'vid2_rob_p1_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
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