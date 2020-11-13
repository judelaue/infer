(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

(** Abstract domain *)

include Domain_intf.Dom

val create_summary :
     globals:Llair.Global.Set.t
  -> locals:Llair.Reg.Set.t
  -> formals:Llair.Reg.t list
  -> entry:t
  -> current:t
  -> summary * t

val simplify_states : bool ref
