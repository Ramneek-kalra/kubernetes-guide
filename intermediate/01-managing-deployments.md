# Managing Deployments

In Kubernetes, deployments are a higher-level abstraction that manages ReplicaSets and Pods. They provide declarative updates for Pods and ReplicaSets.

## Key Features
- Declarative updates (e.g., `kubectl apply`).
- Rollbacks to previous versions.
- Scaling applications up or down.

## Example: Create and Manage a Deployment
```bash
kubectl create deployment nginx-deployment --image=nginx
kubectl get deployments
```

### Scaling a Deployment
```bash
kubectl scale deployment nginx-deployment --replicas=5
```

---

📝 **Next Step:** [Services and Networking](02-services-and-networking.md)
