export default {
  bind(el, binding) {
    // console.log(el, binding, vnode);
    const _ops = binding.value,
      _c = el.getElementsByClassName(_ops.className);
    console.log(el, binding);
    _c[_ops.curIdx].className += ` ${_ops.currentClassName}`;
  },
  update(el, binding) {
    console.log(el, binding, "----------update---->");
    // console.log(binding.oldValue);
    const _ops = binding.value,
      _oOps = binding.oldValue,
      _c = el.getElementsByClassName(_ops.className);
    // // _c[_ops.curIdx].className += ` ${_ops.currentClassName}`;
    _c[_oOps.curIdx].className = `${_oOps.className}`;
    _c[_ops.curIdx].className += ` ${_ops.currentClassName}`;
  },
};
