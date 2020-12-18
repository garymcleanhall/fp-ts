/**
 * A `BoundedLattice` must satisfy the following in addition to `BoundedMeetSemilattice` and `BoundedJoinSemilattice` laws:
 *
 * - Absorption law for meet: `a ∧ (a ∨ b) <-> a`
 * - Absorption law for join: `a ∨ (a ∧ b) <-> a`
 *
 * @since 3.0.0
 */
import { BoundedJoinSemilattice } from './BoundedJoinSemilattice'
import { BoundedMeetSemilattice } from './BoundedMeetSemilattice'

/**
 * @category type classes
 * @since 3.0.0
 */
export interface BoundedLattice<A> extends BoundedJoinSemilattice<A>, BoundedMeetSemilattice<A> {}
